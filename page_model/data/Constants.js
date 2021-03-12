import dotenv from 'dotenv'

dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.VALIDUSER,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    },
    LOCKED_OUT_USER: {
        USERNAME: 'locked_out_user',
        PASSWORD: process.env.PASSWORD
    },
    PROBLEM_USER: {
        USERNAME: 'problem_user',
        PASSWORD: process.env.PASSWORD
    },
    PERFORMANCE_GLITCH_USER: {
        USERNAME: 'performance_glitch_user',
        PASSWORD: process.env.PASSWORD
    }
}