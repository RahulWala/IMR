
export class UserInfoModel
{
	customerUid: string;
	
	username: string;

	email: string;

	password: string;

	repassword : string;
	
	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}