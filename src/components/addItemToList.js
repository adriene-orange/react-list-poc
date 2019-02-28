import React from 'react';
import { connect } from 'react-redux';
import { addItemToListRequest } from '../actions/list';

const AddItemToListButton = ({ handleAddTeamMember, item }) => {
    const addTeamMemberToList = () => handleAddTeamMember(item);
    return (
        <button onClick={addTeamMemberToList}>Add Team Member</button>
    )
};

const mapDispatchToProps = (dispatch, myProps) => ({
    handleAddTeamMember: (item) => dispatch(addItemToListRequest(item)),
});

export default connect(null,mapDispatchToProps)(AddItemToListButton);

 