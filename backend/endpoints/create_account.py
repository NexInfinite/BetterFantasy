from flask import Blueprint

create_account = Blueprint("create_account", __name__)

@create_account.route("/create-account", methods=["GET"])
def create_new_account():
    """
    Get the user's information from a form, validate that it came from the nextjs
    backend (to help prevent attacks) and then attempt to add to the database.
    Must validate all inputs no matter what, try to make it at least a little secure,
    although this is open source so im sure someone will figure out away to break this 
    (please don't).

    :return: 200 (OK) if the account was successfully added
    :return: 401 (Unauthorized) if the message did not come from nextjs
    :return: 400 (Bad Request) if the account was not added, this will include a json error object
    """
    return "<h1>Hello World</h1>"
