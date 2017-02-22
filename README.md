# WorkIt: An app to log the times you worked out

[WorkIt](https://laurpaik.github.io/WorkIt/) is a web app that allows users to log the dates that they worked out. A user can create an athlete profile when they sign up. Once they log in, they can pick a workout provided and log the date completed based on the workout's ID.

## My Process

- I approached this project fairly slowly, as this was my first full-stack app. I spent several days planning things out and examining other similar apps I have used in the past. As per usual, I had ideas of grandeur that got watered down to something more manageable for the week allotted. For example, before a user can log distance and time on a workout, they first need to be able to say that they did indeed, do the workout.
- Before I could do anything, I needed to create my databases. I spent the first day creating my Athlete, Workout, and Log models before creating the relationships between them.
- Later, after making everything CRUDable, I began working on the one-to-one relationship between Athlete and User. This one-to-one relationship proved to be the most difficult part of the process. I found I was able to create the relationship, but on the front end things got sticky because the user and the athlete were not synced up properly, and I could not create logs without the proper id-number of the athlete.
- Ultimately, I edited my sign-up controller to include `create athlete`. While there are other ways to get around the problems I was having, this one made the most sense because it was a back-end fix rather than a front-end fix.

## Unsolved Problems

- Currently, this application works because user ids and athlete ids are the same. However, if a user deletes their account, I do not yet have it set up where the athlete-profile will also get deleted. That said, I also do not have a function to delete a user account yet, so this is all later down the line.
- I will eventually need to set it up so that the id numbers can be different, so that users can have more than one profile (admin/coach status?)... but for the purpose of this project I chose to keep it simple.
- I believe the edit logs feature could be made more user-friendly with handlebars to create an edit button for each logged workout, rather than making the users look up their own log IDs.
- In general, the site could have a better layout for user experience.

## Future Goals

- I want to eventually allow my users to input time and distance. I also want users to be able to create their own workouts instead of relying on a database that I made.
- In the long run, I really want to add a lifts element to my app. It would require another model, 'Sets', which would belong to workouts (workouts would have many sets). That said, I am a long way from this last goal. If you're interested in the steps in between, I broke it down in my user stories below.
- Finally, I want my website to be pretty.

### Links to my planning process
- [Back-End Repo](https://github.com/laurpaik/WorkIt-API)
- [User Stories](https://docs.google.com/document/d/1VxeEJti73E9d70wlD31QKAdRUUaPvNK-REMGy8Z6_P0/edit?usp=sharing)
- [Some rough wireframes](https://goo.gl/photos/sYd8cBuBAVpqGprf7)
- [Basic Scheduling](https://docs.google.com/document/d/1-lv2p1EB-TjBV75QXbKncJLytPja9q8zaZn0EkCcI3k/edit?usp=sharing)
- [Current ERD (Entity-Relationship Diagram)](https://goo.gl/photos/rW2YYa78aE4abpFr8)

### Shout-outs
- [Max](https://github.com/doremaxime), who helped me fix certain bugs on the front-end
- [Moshe](https://github.com/moshiko1988), who also helped me fix certain bugs on the front-end
- [Bernard](https://github.com/bernardlee), who helped me with simplifying my planning process as well as led me to understand user/athlete creation
- [Rachel](https://github.com/raq929), who helped me with my issues
- [Antony](https://github.com/gaand), whose templates I used
- My former rowing coach, [Brian Dawe](http://www.gotuftsjumbos.com/sports/wcrew/coaches/dawe), whose [website](http://www.jumbocrew.org/index.php) I used for four years and looked to for loose inspiration
- Concept2, an indoor rowing company that has a similar (but less team-specific) [web app](https://log.concept2.com/login) as Coach Brian's
