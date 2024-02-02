const pool = require('../DB/db');

exports.main = async (req, res) => {
    try {
        const userCheckQ = "SELECT * FROM user";
        const userCheckR = await pool.query(userCheckQ);
        console.log(userCheckR[0]);
        res.send(userCheckR[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.main2 = async (req,res) =>{
    try{
        const Id = req.body.id;
        const Pw = req.body.pw;
        const Nn = req.body.Nn;

        console.log(Id, Pw, Nn);

        const userCheckQ = "INSERT INTO user (user_id, user_pw, user_nickname) VALUES (?,?,?)"
        const userCheckR = await pool.query(userCheckQ,[Id, Pw, Nn]);

    }catch{
        console.error(error);
    }
}



exports.register = async (req, res) => {
    try{
        const Id = req.body.id;
        const Pw = req.body.pw;
        const Nickname = req.body.Nickname;

        console.log(Id, Pw, Nickname);

        res.send(user);

    }catch(error){
        console.error(error);
    }
}