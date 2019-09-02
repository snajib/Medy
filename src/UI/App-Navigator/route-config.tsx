export const names = {
    EmployerHome: 'Home',
    EmployerFinder: 'Finder',
    EmployerPostings: 'Postings',
    EmployerMore: 'More'
}

const routeSuffix = {
    screen: 'Screen'
}

//Attaching names with screen
export const screenNames =
    (routeName) => `${routeName}${routeSuffix.screen}`;