import { sounds } from './sounds';
console.log(sounds)
const soundsInfo = [
    {
        id: 0,
        user : 'user6000', 
        date: new Date().toString(),
        location: 'oakland, ca',
        description : 'the sound of my bathroom, in summer',
        src: sounds[0],
    },
    {
        id: 1,
        user: 'Douglas Fleischut',
        date: new Date().toString(),
        location : 'hollyweird, ca',
        description : 'simulated room tone',
        src: sounds[1],
    },
    {
        id: 2,
        user : 'Someone Special',
        date: new Date().toString(),
        location : 'Orlando, Florida',
        description : 'Blue Room Tone',
        src: sounds[2], 
    },
    {
        id: 3,
        user : 'Lucky Sinovia',
        date: new Date().toString(),
        location : 'Boise, Idaho',
        description : 'sound proofed room tone',
        src: sounds[3], 
    },
    {
        id: 4,
        user : '',
        date: new Date().toString(),
        location : '',
        description : 'Bright Afternoon Sunlight', 
        src: sounds[4],
    },
    {
        id: 5,
        user : 'Sue Min',
        date: new Date().toString(),
        location : 'San Francisco, CA',
        description : 'Confessional Room Tone',
        src: sounds[5], 
    },
    {
        id: 6,
        user : 'Paul Saunders',
        date: new Date().toString(),
        location : 'Redding, CA',
        description : 'Nursery Room Tone', 
        src: sounds[6],
    },
    {
        id: 7,
        user : 'Thit Nuong',
        date: new Date().toString(),
        location : 'Los Angles, CA',
        description : 'Dream House Room Tone', 
        src: sounds[7],
    },
    {
        id: 8,
        user : 'Rassely Thomas',
        date: new Date().toString(),
        location : 'Ann Arbor, MI',
        description : 'noisey room tone', 
        src: sounds[8],
    },
    {
        id: 9,
        user : 'Summer Jins',
        date: new Date().toString(),
        location : 'Dallas, TX',
        description : 'tourbus room tone', 
        src: sounds[9],
    }


]

export default soundsInfo