import React from 'react';
import './App.css';
import {TodoItem} from "./components/TodoItem/TodoItem";
import {Box, Button, Card, Container, FormControl, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Box mt={10}>
                    <Card>
                        <Box px={1}>
                            <Typography variant={"h2"} mt={2} align={"center"}>Todos</Typography>
                            <Box mb={2} sx={{display: 'flex', justifyContent: 'space-between', gap: "10px"}}>
                                <FormControl fullWidth>
                                    <TextField id="outlined-basic" label="New task" variant="outlined"
                                               sx={{
                                                   borderBottomRightRadius: 0,
                                                   borderTopRightRadius: 0
                                               }}/>
                                </FormControl>
                                <Button variant={"outlined"}>
                                    <AddIcon/>
                                </Button>
                            </Box>
                            <Box mt={1}>
                                <TodoItem isChecked={true} label={"My first task"}/>
                            </Box>
                            <Box mt={1}>
                                <TodoItem isChecked={false} label={"My second task"}/>
                            </Box>
                            <Box mt={1}>
                                <TodoItem isChecked={false} label={"My third task"}/>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </div>
    );
}

export default App;
