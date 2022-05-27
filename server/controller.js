
const fortunes = ['Love lights up the world.', 'Now is a good time to buy stock.', 'Share your joys and sorrows with your family.', 'You always bring others happiness.', 'Your life will be happy and peaceful.', 'Believe in yourself and others will too.', 'A beautiful, smart, and loving person will be coming into your life.']
const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];


module.exports = {

getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

getFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

addFortune: (req, res) => {
        const { newFortune } = req.body
        fortunes.push(newFortune)
        res.status(200).send(`${newFortune} added`)
},

deleteFortune: (req, res) => {
    let index = fortunes.findIndex((elem) => elem.id === +req.params.id);
     fortunes.splice(index, 1)
     res.status(200).send(`deleted the fortune`)
}, 

changeCompliment: (req, res) => {
    let { compliment } = req.body
    let { id } = req.params
    
    for(let i = 0; i < compliments.length; i++) {
        if(i === +id) {
            compliments[i] = compliment
        }
    }
    console.log(compliments)
   res.status(200).send(compliments)

}
}
