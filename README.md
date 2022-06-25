# QuickUndoRedo

Module for the implementation of the function to redo and undo

### functions

### init 
>new UndoRedo();

Initializes the storage object function which is stored in a variable

let History = new UndoRedo();

### Save

Save function receives the information to be stored

>History.Save(data);

### Undo  and Redo

>History.Redo();  and History.Undo();

These functions return the stored information undo returns the previous information while the redo function returns the most current information stored

## Example




