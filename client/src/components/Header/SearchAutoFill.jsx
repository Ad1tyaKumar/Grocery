import React from 'react'
import categories from './Categories.jsx'
import { InsertChart } from '@mui/icons-material';

class TrieNode{
    constructor(){
        this.list = {};
        this.isEnd = false;
    }

    put(ch){
        this.list[ch] = new TrieNode();
    }

    getNode(ch){
        return this.list[ch];
    }

    markEnd(){
        this.isEnd = true;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        word = word.toLowerCase();
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            if(!curr.list[word[i]]){
                curr.put(word[i]);
            }
            curr = curr.getNode(word[i]);
        }
        curr.markEnd();
    }

    dfs(curr){
        if(Object.keys(curr.list).length === 0){
            return [""];
        }
        let lst = [];
        for(let i = 'a'; i <= 'z'; i++){
            let str = "";
            let temp = [];
            str += i;
            if(curr.getNode(i).isEnd){
                
            }
            temp = dfs(curr.getNode(i));
            for(let words of temp){
                temp.push(str + words);
            }
            lst = [...lst, ...temp];
        }
        return lst;
    }

    getPrefixes(keyWord){
        let curr = this.root;
        for(let i = 0; i < keyWord.length; i++){
            curr = curr.getNode(keyWord[i]);
        }
    }

}

const SearchAutoFill = ({ getBrands }) => {



    return (
        <div>SearchAutoFill</div>
    )
}

export default SearchAutoFill