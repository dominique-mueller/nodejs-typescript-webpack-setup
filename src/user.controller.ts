import * as request from 'request';

import { Request, Response, NextFunction } from 'express';

export class UserController {

	public async getUser( request: Request, response: Response, next: NextFunction ): Promise<void> {
		const { username }: any = request.params;
		const user: any = await this.fetchUser( username );
		response.set('Content-Type', 'application/json')
  		response.send( user );
		next();
	}

	private fetchUser( username: string ): Promise<any> {
		return new Promise<any>( ( resolve, reject ) => {
			request.get( `https://api.github.com/users/${ username }`, {
				headers: {
					'User-Agent': 'nodejs-backend'
				}
			}, ( error: any, response: request.Response ) => {
				if ( error ) {
					console.error( 'An error occured!', error );
				}
				resolve( response.toJSON().body );
			} );
		} );
	}

}
