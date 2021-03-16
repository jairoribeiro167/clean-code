from datetime import datetime


class BlogPost:
    def __init__(self, title, description, publish_date):
        self.title = title
        self.description = description
        self.publish_date = publish_date

    def print(self):
        print('Title: ' + self.title)
        print('Description: ' + self.description)
        print('Published: ' + self.publish_date)


def get_current_formatted_date():
    current_date = datetime.now()
    return current_date.strftime('%Y-%m-%d %H:%M')


title = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
publish_date = get_current_formatted_date()

post = BlogPost(title, description, publish_date)
post.print()
