/**
 * Required External Modules
 */
const express = require('express')
const path = require('path')
const { builtinModules } = require('module')
const { parse } = require('url')
const {performance} = require('perf_hooks');
var exec = require('sync-exec');

/**
 * App Variables
 */
const app = express(); 
const port = process.env.PORT || '8081';

const DEFAULT_SUDOKU = '0xxxxxBA3X68X5XXXXBX9XDXFX0X4XXXXXXXXXFXXXXADX13XX3X7XXXXXCXXXEXDXX3XF8XXCX2XEXXC21XXXXB8XD5XXXX9XX86XXCXXAFXX74X0XX1XAXX4XXXX8DXXX6XXXXXEXXX397FEXXXX97XXXC5X6AXX9AXXXXBXXX8XDC8XXXDXCXXAXXXXFBXXXXXX5XXXXXXXCXXXX7CAXDX6EXXX3X1CX0EXXXD7XXA9XFEX4XX7XFXX5XX0XX'

/**
 *  App Configuration
 */
// set ejs as view engine
app.set('view engine', 'ejs');

// set public dir
app.use(express.static(path.join(__dirname, 'public')))

// set css / js frontend libraries
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

/**
 * Routes Definitions
 */
 app.get('/solve/:sudoku', (req, res) => {
    const { content } = req.params
    const initialSudoku = req.params.sudoku
    
    if(initialSudoku.length >= 256){
        // Launch solver  
        try {
            // console.log("Solving : " + initialSudoku)
            const [solvedSudoku, time] = launchSolver(initialSudoku)
            console.log('Solved : ' + solvedSudoku + ' in : ' + time + ' seconds\n')
        
            // send data to browser
            res.render(__dirname + '/public/index.ejs', {solvedSudoku:solvedSudoku, time:time, initialSudoku:initialSudoku})
        } catch (error) {
            res.send("Url format not supported " + error)
        }
    } else {
        res.send("Url format not supported. Input Length : " + initialSudoku.length)
    }

 });  
 app.get('/:sudoku?', (req, res) => {
    var sudoku = req.params.sudoku
    if (typeof sudoku == 'undefined'){
        // load a default sudoku string
        sudoku = DEFAULT_SUDOKU
    }
    res.redirect(`/solve/${sudoku}`);
 })

/**
 * Server Activation
 */
 app.listen(port, () => {
     console.log(`App available on http://localhost:${port}`)
});

function launchSolver(sudoku){
    result = exec(`python3 solver/hexa_solver.py ${sudoku}`).stdout

    sol = result.split('\n') // get 2 lines : the result and execution time

    return [sol[0], sol[1]]
}