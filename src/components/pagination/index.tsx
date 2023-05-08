"use client";
import styles from "@/styles/components/pagination/pagination.module.scss";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
// import { useRouter } from "next/router";
type Props = {
    setCount: (count: number) => void;
    pageCount: number;
};
const Pagination = ({ setCount, pageCount }: Props) => {
    const router = useRouter();
    const handlePageClick = (data: any) => {
        const count: number = data.selected + 1;
        setCount(count);
        console.log(router);
        
        router.push(
            `?page=${data.selected + 1}&items=20`,
            { forceOptimisticNavigation: true },
            
        );
    };
    return (
        <div>
            <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel={"<"}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={styles.breakClassName}
                containerClassName={styles.container}
                pageClassName={styles.page_item}
                pageLinkClassName={styles.page_item_link}
                activeClassName={styles.active}
                previousClassName={styles.prev_next}
                nextClassName={styles.prev_next}
                previousLinkClassName={styles.prev_next_link}
                nextLinkClassName={styles.prev_next_link}
            />
        </div>
    );
};

export default Pagination;
