from flask_login import UserMixin


class User(UserMixin):
    """User class"""

    def __init__(self):
        """Initializing app with parameters name, email, profile_pic"""
        # TODO

    @staticmethod
    def get():
        """Return user from database, returning None if no user is found"""
        return None

    @staticmethod
    def create():
        """Create a user and add it to the database"""
        return None
