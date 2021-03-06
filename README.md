#Exquisite Prose API

[![Build Status](https://travis-ci.org/aaroncrows/Exquisite-Prose.svg?branch=master)](https://travis-ci.org/aaroncrows/Exquisite-Prose)

##POST /user/create_user

Creates a new user with the posted attributes. Will initialize time created and
favorites on being saved to the database. 

###Request Body

####screenname (string)

required

the users screenname, this will also be referenced as the segment author

####email (string)

required

the users email address

####password (string)

user password

####location (string)

optional

the users location

##POST /segments/new_segment

Creates a new segment with the posted attributes. Will initialize time created, favorites
 and segment id at database save. Returns segment.

### Request Body

####storyId (number)

required

the Id for the story that the segment belongs to.

####levelId (number)

required

the Id for the level that the segment belongs to. This is essentially the index in the
 array in levels array that the segment will be a part of.

####postBody (string)

required

the body of the segment.

####author (string)

required

the screenname of the user that created the segment.

##GET /user/:screenname

returns a users profile with their last 25 posts (or all of them if there's less than 25)

##Params

###screenname

required

The users screenname.

###Response Body

####screenname

The users screenname.

####location

The location of the user

####posts

The last 25 (or all) of the segments that the user has authored.

####createdAt

The time that the user was created

##GET /story/:storyId

Returns a story object

##Params

###storyId

required

The Id number of the story that you want to fetch.

##Response Body

####storyId

The Id number for the story.

####levels

An array of arrays. Each array represents a level and each item in that array is a segment object.
