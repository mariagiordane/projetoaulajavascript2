const user = {
    name: 'Guilherme',
    lastName: 'Cabrini' 
};

function getUserFullName(user){
    return{
        ...user,
        fullName: '${user,name} ${user.lastName}'
    }
}
const userFullName = getUserFullName(user);

console.log(userFullName);