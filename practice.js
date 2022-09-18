// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.

// I - array of numbers
// O - count of how many numbers are multiples of 5
// C - cannot is for loop or forEach native

// Strategy
// input... [10, 7, 2, 4, 6, 14, 5, 82, 25, 30, 100, 246] output... 5
// look at each number and determine if it is divisible by 5

// Pseudocode
// create count var and set equal to 0
// loop through each number
  // if number is divisible by 5
    // increment count by 1
// return count

var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

// use _.each to build an array of objects (tweets) belonging to a specified user.
// I - an array of objects (tweets)
// O - an array with tweets from a specified user
// C - cannot use a for loop or forEach
// E -

// Strategy
// look at each object (tweet), check if the tweet was written by the given user

// Pseudocode
// create empty array specificUserTweets
// loop through each tweet
  // if user is equal to given user
    // push entire tweet into specificUserTweets
// return specificUserTweets


var getUserTweets = function(tweets, user) {
  var specificUserTweets = [];
  _.each(tweets, function(tweet, index, collection) {
    if (tweet.user === user) {
      specificUserTweets.push(tweet);
    }
  });
  return specificUserTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.

// I - an array of fruiit and a specific fruit string
// O - an array with only the specified fruit
// C - cannot use for loop or .filter; cannot create new arrays
// E

// Strategy
// Use _.filter to filter through the fruits array and check if each fruit is equal to target fruit

var onlyOneFruit = function (fruits, targetFruit) {
  var result = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var result = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var result = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return result;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var result = _.filter(tweets, function(tweet) {
    return tweet.user === user;
  });
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var result = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return result;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var result = _.map(desserts, function(dessert) {
    dessert['glutenFree'] = !dessert.ingredients.includes('flour');
    return dessert;
  });
  return result;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var result = _.map(tweets, function(tweet) {
    return tweet.message;
  });
  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var answer = _.map(groceries, function(item) {
    item.salePrice = '$' + Math.round(Number(item.price.substring(1)) * (1 - coupon) * 100) / 100;
    return item;
  });
  return answer;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var result = _.reduce(products, function(total, product) {
    var price = Number(product.price.substring(1));
    return total + price;
  }, 0);
  return result;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var result = _.reduce(desserts, function(counts, dessert) {
    var dessertType = dessert.type;
    if (counts[dessertType] === undefined) {
      counts[dessertType] = 1;
    } else {
      counts[dessertType]++;
    }
    return counts;
  }, {});
  return result;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var result = _.reduce(tweets, function(counts, tweet) {
    var tweetUser = tweet.user;
    if (counts[tweetUser] === undefined) {
      counts[tweetUser] = 1;
    } else {
      counts[tweetUser]++;
    }
    return counts;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var result = _.reduce(movies, function(ninetiesMovies, movie) {
    var movieYear = movie['releaseYear'];
    if (movieYear >= 1990 && movieYear < 2000) {
      ninetiesMovies.push(movie.title);
    }
    return ninetiesMovies;
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var result = _.reduce(movies, function(canWatchMovie, movie) {
    var movieRuntime = movie['runtime'];
    if (timeLimit > movieRuntime) {
      canWatchMovie = true;
    }
    return canWatchMovie;
  }, false);
  return result;
};
