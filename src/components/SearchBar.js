import React from 'react';

class SearchBar extends React.Component{
    state = {mySearch:''}

    myChangeInput = (event)=>{
        this.setState({mySearch:event.target.value})
    }

    onSubmitForm=(event)=>{
        event.preventDefault();
        // TODO: Make shure we call
        // callback from parent component
    }


    render(){
        return (
            <div className='ui segment search-bar'> 
            <form action="" className='ui form' onSubmit={this.onSubmitForm}>
                <div className="field">
                    <label htmlFor="">Search Video</label>
                    <input type="text" value={this.state.mySearch} onChange={this.myChangeInput}/>
                </div>
            </form>
            
            </div>

        )
        }
}
export default SearchBar;