const mongoose=require('mongoose');

const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, 'cleaned.xlsx');

//Connect to MongoDB (replace 'mongodb://localhost:27017/dbName' with your MongoDB URI)
mongoose.connect('mongodb+srv://timesheet-admin:w48lxcSJfqB0wpCp@staging-a.6dfi4.mongodb.net/timesheet-staging', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});




//
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};


const dataSchema = new mongoose.Schema({
    client_name: {
        type: String,
      //  required: true,
        default: "",
    },
    company_email: {
        type: String,
        trim: true,
        lowercase: true,
        // unique: true,
       // required: "Email address is required",
        validate: [validateEmail, "Please fill a valid email address"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address",],
    },
    company_website: {
        type: String,
        //required: true,
    },
    company_registered_address: {
        type: String,
       // required: true,
    },
    company_logo: {
        type: String,
    },
    billing_type: {
        type: String,
       // required: true,
    },
    primary_point_of_contact: {
        type: Object,
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            // unique: true,
            required: "Email address is required",
            validate: [validateEmail, "Please fill a valid email address"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
    },
    secondary_point_of_contact: {
        type: Object,
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            // unique: true,
            //required: "Email address is required",
            validate: [validateEmail, "Please fill a valid email address"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
    },
    project_id: {
        type: Array,
    },
    project_name: {
        type: Array,
    },
    client_type: {
        type: String,
        enum: ["Managed services", "Software client"],
    },
    portal: {
        type: String,
        enum: ["Stand alone", "Centralized portal", "Payroll central"],
    },
    project_manager: {
        type: String,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    global_presence: {
        type: Array,
    },
    project_coordinator: {
        type: String,
    },
    contract_sign_date: {
        type: Date,
    },
    data_gathered_start_date: {
        type: Date,
    },
    user_data_receipt_date: {
        type: Date,
    },
    kick_off_meeting: {
        type: Date,
    },
    finalization_of_SOW: {
        type: Date,
    },
    date_start_of_implementation: {
        type: Date,
    },
    date_UAT_provided_to_client: {
        type: Date,
    },
    go_live_date: {
        type: Date,
    },
    implementation_duration: {
        type: Number,
    },
    mobile_app_delivery: {
        type: Date,
    },
    project_challenges: {
        type: String,
        default: "",
    },
    remarks: {
        type: String,
        default: "",
    },
    software_version: {
        type: String,
        default: "",
    },
    client_status: {
        type: String,
        default: "Pending",
        enum: [
            "Pending",
            "Live clients",
            "Payroll clients",
            "Ongoing implementation",
            "Live with pending modules",
            "Projects on-hold",
            "Project pipeline",
            "Terminated projects",
        ],
    },
    customer_status: {
        type: String,
        enum: [
            "New",
            "Active",
            "Inactive",
            "Hold",
            "Blacklisted",
            "Discarded",
            "Contract"
        ], default: "New"
    },
    customer_escalation:[{added_by:{type:Map},text:{type:String},escalated_date:{type:Date,default:Date.now}}],
    date_of_email_cancelation: {
        type: Date,
    },
    termination_date: {
        type: Date,
    },
    reason_for_termination: {
        type: String,
        default: "",
    },
    documents: {
        type: Array,
        document_name: {
            type: String,
        },
        document_type: {
            type: String,
        },
        document_url: {
            type: String,
        },
    },
    server_config: [
        {
            env: {
                type: String,
            },
            url: {
                type: String,
            },
            email: {
                type: String,
            },
            password: {
                type: String,
            },
            s3bucket: {
                type: String,
            },
            mongourl: {
                type: String,
            },
        },
    ],
    minutes: {
        type: Array,
        meeting_date: {
            type: Date,
        },
        meeting_message: {
            type: String,
        }
    },

    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    updatedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
);

const DataModel = mongoose.model('customer', dataSchema);

const XLSX=require('xlsx');
const workbook=XLSX.readFile(filePath);

const sheetName = `Terminated Projects`; 
const sheet = workbook.Sheets[sheetName];
console.log(sheet)
const data = XLSX.utils.sheet_to_json(sheet);

data.forEach(async (item) => {
    try {
        const cleanedItem = {};

        // Iterate over keys in the item object
        Object.keys(item).forEach((key) => {
            // Check if the value is not empty and not undefined
            if (item[key] !== '' && item[key] !== undefined) {
                cleanedItem[key] = item[key];
            }
        });

        // Check if cleanedItem has any properties (non-empty fields)
        if (Object.keys(cleanedItem).length > 0) {
            await DataModel.create(cleanedItem);
            console.log('Data uploaded:', cleanedItem);
        } else {
            console.log('Skipped empty record:', item);
        }
    } catch (error) {
        console.error('Error uploading data:', error);
    }
});