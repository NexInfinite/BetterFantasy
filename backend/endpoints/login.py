from flask import Blueprint

login = Blueprint("login", __name__)

@login.route("/login", methods=["GET"])
def show_login():
    """Log the user in"""
    return "<h1>Hello</h1>"