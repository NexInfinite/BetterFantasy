import os

from logins.user import User

from flask import Flask
from flask_login import LoginManager
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
app.secret_key = os.urandom(48)
limiter = Limiter(get_remote_address, app=app, default_limits=["3 per second"], storage_uri="memory://")

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

if __name__ == "__main__":
    from endpoints.create_account import create_account
    app.register_blueprint(create_account)

    app.run(debug=True, port=2024)