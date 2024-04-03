import { CourseType } from "../../../services/courseService";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../slideCard"

interface props {
    course: CourseType[] | undefined;
}

const SlideComponent: React.FC<props> = ({ course }: props) => {
    
    if (!course || !Array.isArray(course)) return null;
    
    return (
        <>
            <div>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        pagination: false,
                    }}
                >
                    {course?.map((course) => (
                        <SplideSlide key={course.id}>
                            <SlideCard course={course} />
                        </SplideSlide>
                    ))
                    }
                </Splide>
            </div>
        </>
    )
};

export default SlideComponent;