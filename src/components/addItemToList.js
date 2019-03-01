import React from 'react';
import uniqueId from 'lodash/uniqueId';
import { connect } from 'react-redux';
import { addItemToListRequest } from '../actions/list';
import nott from '../data/characters/nott';

const AddItemToListButton = ({ handleAddTeamMember, item }) => {
    const addTeamMemberToList = () => handleAddTeamMember(item);
    return (
        <button onClick={addTeamMemberToList}>Add Team Member</button>
    )
};

const mapDispatchToProps = (dispatch) => ({
    handleAddTeamMember: () => dispatch(addItemToListRequest({ id: uniqueId(), ...nott })),
});

export default connect(null,mapDispatchToProps)(AddItemToListButton);

 