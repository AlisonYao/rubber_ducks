import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred,{
    'databaseURL':'https://together-we-study.firebaseio.com/'
    })

#  add data
ref = db.reference('/')
ref.set({
    'User':
        {
            'User1':{
                'name':'Molly He',
                'gender':'F',
                'age_group':'University',
                'state':'OUT',
                'last_time':0,
                'duration':0,
                'likes':0

            },
            'User2':{
                'name':'Jason Chen',
                'gender':'M',
                'age_group':'Elementary',
                'state':'OUT',
                'last_time':0,
                'duration':0,
                'likes':0
            }
        },
    'Room':
        {
            'Rm1':{
                'age_group':'Elementary',
                'size':'L',
                'population':None

            },
            'Rm2':{
                'age_group':'University',
                'size':'L',
                'population':None

            }
        }

    })


# Check whether the person is new
name=input('name?') ##Get from google login
# members=[]
new = True
all_users = db.reference('User').get()
for hash_k,profile in all_users.items():
#     members.append(user_prof['name'])
    if name == profile['name']:
        print("Welcome back")
        my_key = hash_k
        print(my_key)
        new = False

if new == True:
    print("Hi there, newcomer")
    # If new, add to the db
    ref = db.reference('User')
    user_ref = ref.push({
        'name':name,
        'gender':'F',
        'age_group':'Elementary',
        'last_time':None,
        'duration':0,
        'likes':0
    })
    my_key = user_ref.key
    print(my_key)


# update my profile
# age_group=input("age_group?")
# gender=input('gender?')
# ref = db.reference('User')
# user_ref = ref.child(my_key)
# user_ref.update({
#     'age_group':age_group,
#     'gender':gender
# })


# enter study room
room=input('room?')
ref = db.reference('Room/'+room+'/population')
location = ref.push(name)
ref = db.reference('User/'+my_key)
ref.update({
    'state':room,
})

# exit study room
location.delete()
ref = db.reference('User/'+my_key)
ref.update({
    'state':"OUT",
})
