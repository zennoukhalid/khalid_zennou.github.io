import { Button, TextField } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import React from 'react';

const Contact =() =>{

    return(
        <div>
           <form noValidate >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            // value={this.state.email}
                            // onChange={this.onChangeEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Name"
                            label="Name"
                            type="Name"
                            id="Name"
                            autoComplete="current-Name"
                            // value={this.state.Name}
                            // onChange={this.onChangeName}
                        />

                         <TextField
                             id="outlined-multiline-static"
                             label="Multiline"
                             margin="normal"
                             multiline
                             fullWidth
                             rows={4}
                             label="Email Address"
                             variant="outlined"
                            // value={this.state.Sujet}
                            // onChange={this.onChangeSujet}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            // onClick={this.submit}
                            style={{ marginTop: 40, paddingTop: 12 }}
                        >
                            <h4>Envoyer</h4>
                        </Button>
                    </form>
        </div>
        
    )
}
export default Contact;
