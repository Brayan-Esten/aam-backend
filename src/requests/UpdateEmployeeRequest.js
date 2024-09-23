export default {
    name: {
        optional: true,
        isString: true,
        isLength: {
            options: {
                max: 255
            }
        }
    },
    role: {
        optional: true,
        isString: true,
        isLength: {
            options: {
                max: 255
            }
        }
    },
    department: {
        optional: true,
        isString: true,
        isLength: {
            options: {
                max: 255
            }
        }
    }
}