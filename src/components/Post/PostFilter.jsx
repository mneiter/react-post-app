import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';


const PostFilter = ({filetr, setFilter}) => {
  return (
    <div>        
        <MyInput 
            value={filetr.query} 
            placeholder="search ..." 
            onChange={(e) => setFilter({...filetr, query: e.target.value})} />
        <MySelect
            value={filetr.sort}
            onChange={selectedSort => setFilter({...filetr, sort: selectedSort})}
            defaultValue="Oredr By"
            options={[{ name: 'Title', value: 'title' },
            { name: 'Description', value: 'body' }]}
        />
    </div>
  );
}

export default PostFilter;
