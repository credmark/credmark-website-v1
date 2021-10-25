export AWS_PROFILE=credmark
export domain=credmark.com

deploy-staging: 
	export subdomain="staging"
	export stage="staging"
	git pull
	cp -pr .serverless-staging .serverless
	serverless --stage="staging"	
	cp -pr .serverless .serverless-staging

deploy-prod: 
	export stage=prod
	git pull
	cp -pr .serverless-prod .serverless
	serverless --stage=prod
	cp -pr .serverless .serverless-prod