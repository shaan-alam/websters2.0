// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


   const fetchRegistrations = async (eventName: string) => {
    const docsRef = collection(db, eventName);
    const docsSnap = await getDocs(docsRef);
  
    return docsSnap.size;
  }

  try {
    const docsRef =  collection(db, 'Web-Hive`');
    const docsSnap =  getDocs(docsRef);
  
    let registrations = [{}];
    
    res.status(200).json({ data: registrations.length })
  } catch (err) {

  }

}
