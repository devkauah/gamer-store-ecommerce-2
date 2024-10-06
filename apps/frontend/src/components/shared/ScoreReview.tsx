import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export interface ScoreReviewProps {
    score:number;
    size?:number;
};

export default function ScoreReview(props:ScoreReviewProps) {
    function ratingForStars(score:number) {
        const stars = [];

        for (let i = 1; i<= 5; i++) {
            if (score >= i) {
                stars.push(<IconStarFilled size={ props.size ?? 12} />)
            } else if (score >= i - 0.5) {
                stars.push(<IconStarHalfFilled size={ props.size ?? 12} />)
            } else {
                stars.push(<IconStar size={ props.size ?? 12} />)
            };
        };

        return stars;
    };

    return <div className="flex gap-0.5 text-emerald-400">{ ratingForStars(props.score) }</div> 
};  