import logo from './greenforgelogo.png'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import Tatalogo from './Tatalogo.png'
import ParleLogo from './ParleLogo.jpg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'
import DigitalLit from './DigitalLit.png'
import CommunicationSkill from './Communication.png'
import Technical from './Technical.png'
import Financial from './Financial.png'
import Entrepreneurship from './Entrepreneurship.png'
import Rakesh from './Rakesh.png'
import Rohan from './Rohan.png'
import Anshu from './Anshu.png'
export const assets = {
    Rakesh,
    Rohan,
    Anshu,
    logo,
    DigitalLit,
    CommunicationSkill,
    Financial,
    Technical,
    Entrepreneurship,
    search_icon,
    sketch,
    Tatalogo,
    ParleLogo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "Rishab Kumar",
    "email": "user.rishabk@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}




export const dummyTestimonial = [
    {
        name: 'Ravi Sharma',
        role: 'Marketing Executive',
        image: assets.Rakesh,
        rating: 5,
        feedback: 'This course changed the way I approach my career. I joined this course to improve my skill set, and it far exceeded my expectations. The lessons were practical, easy to follow, and immediately applicable in real-life scenarios. Highly recommended.',
    },
    {
        name: 'Rohan Raj',
        role: 'Small Business Owner',
        image: assets.Rohan,
        rating: 4.8,
        feedback: 'The best investment I made this year!. As someone running a business, I needed practical knowledge, not theory. This course delivered exactly that. I’ve already implemented many of the strategies and seen real results.',
    },
    {
        name: 'Anshu Mishra',
        role: 'Final Year Student',
        image: assets.Anshu,
        rating: 4.7,
        feedback: 'Perfect for beginners – very well structured. I was a bit nervous about starting, but the course broke down complex topics into simple, digestible chunks. The support from instructors was also amazing. Great value for money!.',
    },
];



export const dummyDashboardData = {
    "totalEarnings": 7007.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to Digital Literacy",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Harsh",
                "imageUrl": Anshu
            }
        },
        {
            "courseTitle": "Introduction to Communication Skill",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Rohan Raj",
                "imageUrl": Rohan
            }
        },
        {
            "courseTitle": "Know About Entrepreneurship",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": Rakesh
            }
        },
        
    ],
    "totalCourses": 5
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction Digital Literacy",
        "courseDescription": "<h2>Learn the Basics of Digital Literacy</h2><p>Learn the foundational skills required to operate computers, smartphones, and digital tools..</p><p>This course is perfect for beginners who want to start their journey in Digital Literacy. ",
        "coursePrice": 2499.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with Digital Literacy",
                "chapterContent": [
                    {
                        // "lectureId": "lecture1",
                        // "lectureTitle": "What is JavaScript?",
                        // "lectureDuration": 16,
                        // "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture2",
                        // "lectureTitle": "Setting Up Your Environment",
                        // "lectureDuration": 19,
                        // "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                    //     "lectureId": "lecture3",
                    //     "lectureTitle": "Understanding Variables",
                    //     "lectureDuration": 20,
                    //     "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                    //     "isPreviewFree": true,
                    //     "lectureOrder": 1
                     },
                    {
                        // "lectureId": "lecture4",
                        // "lectureTitle": "Data Types in JavaScript",
                        // "lectureDuration": 10,
                        // "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": DigitalLit
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Introduction to Communication Skill",
        "courseDescription": "<h2>Deep Dive into Communication Skill</h2><p>Improve your ability to express yourself clearly and professionally in the workplace. Learn spoken English, workplace etiquette, effective writing, and listening techniques to build stronger relationships with clients, co-workers, and management.</p>",
        "coursePrice": 2799.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        // "lectureId": " lecture1",
                        // "lectureTitle": "Lists and Tuples",
                        // "lectureDuration": 720,
                        // "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture2",
                        // "lectureTitle": "Dictionaries and Sets",
                        // "lectureDuration": 850,
                        // "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        // "lectureId": "lecture3",
                        // "lectureTitle": "Classes and Objects",
                        // "lectureDuration": 900,
                        // "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture4",
                        // "lectureTitle": "Inheritance and Polymorphism",
                        // "lectureDuration": 950,
                        // "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6776369244daad0f313d81a9"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": CommunicationSkill
    },
   
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "Introduction to Financial Literacy",
        "courseDescription": "<h2>introduction to financial planning</h2><p>Understand the value of money, budgeting, and saving. This course empowers SME workers with practical financial knowledge including how to manage income, track expenses, and plan for the future.</p>",
        "coursePrice": 2299.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS Basics",
                "chapterContent": [
                    {
                        // "lectureId": "lecture1",
                        // "lectureTitle": "Introduction to HTML",
                        // "lectureDuration": 600,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture2",
                        // "lectureTitle": "Styling with CSS",
                        // "lectureDuration": 720,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Fundamentals",
                "chapterContent": [
                    {
                        // "lectureId": "lecture3",
                        // "lectureTitle": "JavaScript Basics",
                        // "lectureDuration": 800,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture4",
                        // "lectureTitle": "DOM Manipulation",
                        // "lectureDuration": 850,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": Financial
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "Know About Entrepreneurship",
        "courseDescription": "<h2>Entrepreneurship Fundamentals</h2><p>Want to start your own business? Learn how to plan, start, and manage a small enterprise. From identifying opportunities to managing daily operations, this course offers real-world insights for aspiring entrepreneurs.</p>",
        "coursePrice": 3169.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        // "lectureId": "lecture1",
                        // "lectureTitle": "What is Cloud Computing?",
                        // "lectureDuration": 600,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture2",
                        // "lectureTitle": "Cloud Service Models",
                        // "lectureDuration": 720,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Exploring Cloud Platforms",
                "chapterContent": [
                    {
                        // "lectureId": "lecture3",
                        // "lectureTitle": "AWS Basics",
                        // "lectureDuration": 800,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": true,
                        // "lectureOrder": 1
                    },
                    {
                        // "lectureId": "lecture4",
                        // "lectureTitle": "Introduction to Google Cloud",
                        // "lectureDuration": 850,
                        // "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        // "isPreviewFree": false,
                        // "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": Entrepreneurship
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Basic Technical Skills Program",
        "courseDescription": "<h2>Machine operator basics and electrician training</h2><p>Enhance your hands-on abilities in specific trades like machine operation, electrical repair, or maintenance. Ideal for factory workers, technicians, and those looking to upskill in vocational roles.</p>",
        "coursePrice": 3299.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": []
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": []
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": Technical
    },
]