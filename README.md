Assignment-6  

1.  What is the difference between var, let, and const?  
   -> var: Function-scoped, can be redeclared and updated, lifted    
   -> let: Block-scoped, can be updated but not redeclared, not lifted  
   ->  const: Block-scoped, cannot be updated or redeclared, must be initialized
    
2. What is the difference between map(), forEach(), and filter()?  
   => map(): Creates new array by updating  each element as required  
   => forEach(): Executes a function on each element (not return)  
   => filter(): Creates new array with elements that pass a test

3. What are arrow functions in ES6?  
  -> Shorter syntax: const func = (element) => {} instead of function() {}  
  -> No own this binding (inherits from parent scope)  
  -> Cannot be used as constructors    
4. How does destructuring assignment work in ES6?  
   => Extracts values from (arrays/objects) into variables  
   Example: const {name, age} = person or const [ind1, ind2] = arr
5. Explain template literals in ES6. How are they different from string concatenation?  
  -> Use backticks (`) instead of quotes("")  
  -> Allow multiline strings and embedded expressions: Hello ${name}  
  -> Cleaner and easier than concatenation: Hello ${name} vs 'Hello ' + name
