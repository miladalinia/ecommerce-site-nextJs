import React from 'react';
import { Product } from '@/models/Product';
import MoreFetchDataBtn from '@/app/components/MoreFetchDataBtn';
import Link from 'next/link';
import clsx from "clsx";

export const getProducts = async ({ page = 1, limit = 20}: { page?: number, limit?: number }) => {
  const url = new URL('https://65ec475c0ddee626c9afe243.mockapi.io/products');
  url.searchParams.append('page', `${page}`);
  url.searchParams.append('limit', `${limit}`);
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

const Products = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 20

  const products: Product[] = await getProducts({ page, limit })

  return (
    <>
      <div className="grid overflow-x-hidden xs:grid-cols-1 sm:grid-cols-5 gap-4 font-mono">
        {products?.map((product) => (
          <div
            className="flex bg-purple-300 gap-2 flex-col items-center p-8 rounded-lg"
            key={product.id}
          >
            <strong>{product.title}</strong>
            <p>{product.body}</p>
            <span className="text-gray-600">{product.createdAt}</span>
          </div>
        ))}
      </div>
      {/* pagination with buttons */}
      <div className='flex justify-center space-x-4 pt-8'>
        <Link href={`/products?page=${page > 1 ? page - 1 : 1}`}
          className={clsx('rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
            page <= 1 && 'pointer-events-none opacity-50'
          )}
        >
          Previous
        </Link>
        {
          Array.from(Array(5))?.map((_, i) => (
            <Link href={`/products?page=${i+1}`}
              className={clsx('rounded-full border px-3 py-1 text-sm',
              page === i+1 && 'bg-purple-300 text-white')}
            >
              {i+1}
            </Link>
          ))
        }
        <Link href={`/products?page=${page < 5 ? page + 1: 5}`}
          className={clsx('rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800',
          page >= 5 && 'pointer-events-none opacity-50')}
        >
          Next
        </Link>
      </div>

      {/* infinite scroll */}

      {/* {
        products?.length < 100 &&  <MoreFetchDataBtn limit={limit} />
      } */}
    </>
  );
};

export default Products;