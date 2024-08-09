import pytumblr

client = pytumblr.TumblrRestClient(
  'I55g8wzJz8ABvAtEQWkGEsOr3IMZsKY4OvDsnHebXne2KI9aeX',
  'g7cSU5tFhScy1Ehm7ygK17VSgyDMBGbIMrPVHSMZR6HpTnjpOc',
  'gW8pOgJeOXUKUbpU9gV9BwQVbxKF8JHubXqXbeQmaDLLQFNvUy',
  'PHmlZz6Hw6Q4DqjtvQbqRcowPikogsOwbzDa5GF9E9rmjb6q8M'
)

# Make the request
client.info()