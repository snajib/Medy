enum profileHeaderOptionsKeys {
    Company_Pictures = "Company Pictures",
    About = "About",
    Technologies = "Technologies"
};

enum accountHeaderOptionsKeys {
    Personal_Info = "Personal Login and Security",
    Personal_Profile = "Personal Profile",
    Company_Info = "Company Login and Security"
}

enum settingsHeaderOptionsKeys {
    Languages = "Languages",
    Feed_Prefernces = "Feed Preferences",
    Subscriptions = "Subscriptions",
    PaymentOptions = "Payment Options"
}

enum historyHeaderOptionsKeys {
    Purchases = "Purchases",
    Past_Employees = "Past Employees",
    Activity = "Activity"
}

export const profileOptions = [
    profileHeaderOptionsKeys.Company_Pictures,
    profileHeaderOptionsKeys.About,
    profileHeaderOptionsKeys.Technologies
]

export const accountOptions = [
    accountHeaderOptionsKeys.Personal_Info,
    accountHeaderOptionsKeys.Personal_Profile,
    accountHeaderOptionsKeys.Company_Info
]
export const settingsOptions = [
    settingsHeaderOptionsKeys.Languages,
    settingsHeaderOptionsKeys.Feed_Prefernces,
    settingsHeaderOptionsKeys.Subscriptions,
    settingsHeaderOptionsKeys.Subscriptions
];
export const historyOptions = [
    historyHeaderOptionsKeys.Activity,
    historyHeaderOptionsKeys.Past_Employees,
    historyHeaderOptionsKeys.Purchases
]

