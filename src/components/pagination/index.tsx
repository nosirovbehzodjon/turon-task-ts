"use client";
import styles from "@/styles/components/pagination/pagination.module.scss";
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";
type Props = {
    setPage: (count: number) => void;
    pageCount: number;
    page: number;
};
const Pagination = ({ setPage, page, pageCount }: Props) => {
    const router = useRouter();
    const handlePageClick = (data: any) => {
        const n: number = data.selected + 1;
        router.push(`movies/${n}?items=20`);
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
                forcePage={page - 1}
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

export default React.memo(Pagination);
