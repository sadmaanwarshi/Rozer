CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,

    full_name VARCHAR(150) NOT NULL,

    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL DEFAULT '',

    company_address TEXT,

    service_required VARCHAR(150) NOT NULL,

    project_details TEXT NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);