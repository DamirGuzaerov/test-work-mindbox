import React from 'react';
import './App.css';
import {Box, Card, Container, Typography} from "@mui/material";
import {TodoList} from "./components/TodoList/TodoList";
import {NavPanel} from "./components/NavPanel/NavPanel";
import {TodoInput} from "./components/TodoInput/TodoInput";

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm">
                <Box mt={10}>
                    <Card>
                        <Box px={1}>
                            <Typography variant={"h2"} mt={2} align={"center"}>Todos</Typography>
                            <Box mb={1}>
                               <TodoInput/>
                            </Box>
                            <Box mb={1}>
                                <NavPanel/>
                            </Box>
                            <TodoList/>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </div>
    );
}

export default App;
