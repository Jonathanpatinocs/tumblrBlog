from flask import Flask, jsonify
from flask_cors import CORS
import pytumblr
from creds import CONSUMER_KEY, CONSUMER_SECRET, TOKEN, TOKEN_SECRET, ACCESS_TOKEN




app = Flask(__name__)
cors = CORS(app, origins='*')


@app.route("/posts", methods=['GET'])

# Authenticate via OAuth
def clientfunc():

    client = pytumblr.TumblrRestClient(
        CONSUMER_KEY,
        CONSUMER_SECRET,
        TOKEN,
        TOKEN_SECRET
    )
    dashboard = client.dashboard
    posts = client.posts('johnyyy0-0.tumblr.com', notes_info=True)
    print(dashboard)
    
    return(
        jsonify(posts)
    )




# Make the request


if __name__ == "__main__":
    app.run(debug=True, port=8080)