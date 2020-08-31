from flask import Blueprint

home_view = Blueprint('home_view', __name__)

@home_view.route('/')  # Route for the page
def display_home_page():
	return 'Hello, World!'