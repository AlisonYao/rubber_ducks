import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


def initialize_users_and_rooms_manually():
    '''
    write initial users to the database manually
    let's say there is a boy and a girl / 2 rooms already
    '''
    ref = db.reference('/')
    ref.set({
        'User':
            {
                'User1': {
                    'name': 'Molly He',
                    'email': 'molly@gmail.com',
                    'gender': 'F',
                    'age_group': 'University',
                    'state': 'OUT',
                    'last_time': 0,
                    'duration': 0,
                    'likes': 0

                },
                'User2': {
                    'name': 'Jason Chen',
                    'email': 'jason@gmail.com',
                    'gender': 'M',
                    'age_group': 'Elementary',
                    'state': 'OUT',
                    'last_time': 0,
                    'duration': 0,
                    'likes': 0
                }
            },
        'Room':
            {
                'Rm1': {
                    'age_group': 'Elementary',
                    'size': 'L',
                    'population': None

                },
                'Rm2': {
                    'age_group': 'University',
                    'size': 'L',
                    'population': None

                }
            }
    })


def check_new_user_or_not(username, email):
    '''
    if is new user, create new profile
    '''
    for hash_k, profile in all_users.items():
        if username == profile['name']:
            print("Welcome back")
            return hash_k

    print("Hi there, newcomer!")
    # default settings can be changed on website
    user_ref = ref.push({
        'name': username,
        'email': email,
        'gender': 'choose',
        'age_group': 'choose',
        'last_login_time': None,
        'total_duration': 0,
        'likes': 0
    })
    return user_ref.key


def update_login_time(my_key, last_login_time):
    user_ref = ref.child(my_key)
    user_ref.update({
        'last_login_time': last_login_time
    })


def update_profile(my_key):
    age_group = input("age_group? ")
    gender = input('gender (F/M/O)? ')
    user_ref = ref.child(my_key)
    user_ref.update({
        'age_group': age_group,
        'gender': gender
    })


def update_duration(my_key, time_period):
    last_record = all_users[my_key]['total_duration']
    user_ref = ref.child(my_key)
    user_ref.update({
        'total_duration': (last_record + time_period)
    })


def enter_study_room(name, my_key):
    room = input('which room? ')
    db_ref = db.reference('Room/' + room + '/population')
    location = db_ref.push(name)
    user_ref = db.reference('User/' + my_key)
    user_ref.update({
        'state': room,
    })
    return location


def exit_study_room(location, my_key):
    location.delete()
    db_ref = db.reference('User/' + my_key)
    db_ref.update({
        'state': "OUT",
    })


def main():
    # should be getting these info from google login
    username = input('what is your username? ')
    email = input('what is your email? ')
    login_time = input('login_time')

    # check if he/she is a new user or not
    key = check_new_user_or_not(username, email)
    # update login time
    update_login_time(key, login_time)

    # update your profile?
    flag_update = input('Do you want to update your profile now (y/n)? ')
    if flag_update.lower() == 'y' or flag_update.lower() == 'yes':
        update_profile(key)

    # enter a study room?
    flag_enter_room = input('Do you want to enter a study room (y/n)? ')
    if flag_enter_room.lower() == 'y' or flag_update.lower() == 'yes':
        room_location = enter_study_room(username, key)
        # exist the study room?
        flag_exist_room = input('exist (y/n)? ')
        if flag_exist_room.lower() == 'y' or flag_exist_room.lower() == 'yes':
            exit_study_room(room_location, key)
            time_ellapsed = input('frontend send back')
            update_duration(key, time_ellapsed)
        else:
            print('enjoy your time here')


if __name__ == '__main__':
    # start firebase db
    cred = credentials.Certificate("/Users/zhuang/Documents/together-we-study-firebase-adminsdk-sadi1-2c1f7fca1f.json")
    firebase_admin.initialize_app(cred, {'databaseURL': 'https://together-we-study.firebaseio.com/'})

    # global variables
    ref = db.reference('User')
    all_users = ref.get()
    # {'User1': {'age_group': 'University', 'duration': 0, 'email': 'molly@gmail.com', 'gender': 'F', 'last_time': 0,
    #            'likes': 0, 'name': 'Molly He', 'state': 'OUT'},
    #  'User2': {'age_group': 'Elementary', 'duration': 0, 'email': 'jason@gmail.com', 'gender': 'M', 'last_time': 0,
    #            'likes': 0, 'name': 'Jason Chen', 'state': 'OUT'}}

    # intialize databse (we do not need to initailiza everytime)
    # initialize_users_and_rooms_manually()

    # a user login from google
    main()
