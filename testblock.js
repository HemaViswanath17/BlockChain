//Hash function. where data is added with * , later we can use advanced hash
const lighrningHash = (data) =>
{
    return data + '*';
}

//Sample
class Block{
    constructor (data, hash, lastHash)
    {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

// javascript variable
const fooBlock = new Block('foo-data','hash','lastHash');

//To see result
console.log(fooBlock);


//Creating Blockchain
class Blockchain{
    constructor(){

        const genesis = new Block ('gen-data','gen-hash','gen-lasthash');
        this.chain = [genesis];
    }

    addBlock (data){
        const lastHash = this.chain [this.chain.length-1].hash;
        const hash = lighrningHash (data + lastHash);
        const block = new Block(data,hash,lastHash);
        this.chain.push (block);
    }
}

const firstBlockchain = new Blockchain ();
firstBlockchain.addBlock ('one');
firstBlockchain.addBlock ('two');
firstBlockchain.addBlock ('three');

console.log(firstBlockchain);

