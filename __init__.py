from Flask import flask
from home.views import home_view

def create_app(config_file):
	app = Flask(__name__) 
	app.config.from_pyfile(config_file)  
	app.register_blueprint(home_view) 
	return app

if __name__ == '__main__':
	app = create_app('settingslocal.py')  
	app.run()  
<br>