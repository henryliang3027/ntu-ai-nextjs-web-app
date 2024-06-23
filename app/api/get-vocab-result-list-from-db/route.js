import db from "@/services/firebase-db";

export async function GET() {
  const dataList = [];
  // get all data collection from Firestore
  const docList = await db
    .collection("vocab-result-list")
    .orderBy("createdAt", "desc")
    .get();
  // get each doc
  docList.forEach((doc) => {
    // convert doc to JS object
    const data = doc.data();
    // set data id as doc id
    data.id = doc.id;
    // add to dataList
    dataList.push(data);
  });
  return Response.json({
    dataList,
  });
}
