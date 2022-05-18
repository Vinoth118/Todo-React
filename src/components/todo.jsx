import { Text, Flex, Checkbox, Icon} from '@chakra-ui/react' ;
import React from 'react';
import { MdDelete } from 'react-icons/md';

function Todo ({ todo, onClickCheck, onClickDelete }) {
    return (
        <Flex w = "100%" borderRadius = "10px" justifyContent={"space-between"} bg = {todo.isCompleted ? "green.200" : "gray.200"} padding = "12px" >
            <Flex justifyContent={"start"} alignItems={"center"}>
                <Checkbox borderColor={"black"} colorScheme={"green"} isChecked = {todo.isCompleted ? true : false} onChange = {(e) => onClickCheck(todo.id, e.target.checked)} >
                    <Text ml = "10px" as = {todo.isCompleted ? 's' : 'initial'}>{todo.todo}</Text>
                </Checkbox>
            </Flex>
            <Flex cursor = "pointer" w = "30px" h = "30px" justifyContent={"center"} alignItems={"center"} onClick = {() => onClickDelete(todo.id)}>
                <Icon h = "100%" w = "100%" color = "red" as = {MdDelete} />
            </Flex>
        </Flex>
    );
}

export default Todo;