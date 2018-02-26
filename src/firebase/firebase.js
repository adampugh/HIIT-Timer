import * as firebase from "firebase";



firebase.initializeApp(config);

const database = firebase.database();




database.ref("workouts")
    .on("value", (snapshot) => {
        const workouts = [];
        snapshot.forEach((workout) => {
            workouts.push({
                id: workout.key,
                ...workout.val()
            });
        });
        console.log(workouts);
    });

// // subscribe to child_removed event - can also use child_added, child_changed
// database.ref("workouts").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref("workouts")
//     .once("value")
//     .then((snapshot) => {
//         const workouts = [];
//         // creates arr of workouts
//         snapshot.forEach((childSnapshot) => {
//             workouts.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         })
//     });




// database.ref("workouts").push({
//     title: "no"
// });

// database.ref().set({
//     name: "andrew"
// }).then(() => {
//     console.log("data is saved");
// }).catch((e) => {
//     console.log("error", e);
// });

// database.ref("name")
//     .remove()
//     .then(() => {
//         console.log("removed");
//     }).catch((e) => {
//         console.log("error", e);
//     });

// only updates the specific fields provided
// database.ref().update({
//     name: "Mike",
//     age: 30,
//     // will create a new field
//     job: "collector",
//     // updates nested objects
//     "location/city": "Boston"
// })

// fetching data
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         // snapshot contains data recieved
//         const val = snapshot.val();
//         console.log(val);
//         // dispatch action to redux store 
//         // react components update
//     }).catch((e) => {
//         console.log("error", e);
//     });


// fetching data + subscription - dnt use promises
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log("error", e);
// });