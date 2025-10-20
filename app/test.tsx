import {
  dbDelete,
  dbDeleteCollection,
  dbDeleteDoc,
  dbDeleteField,
} from "@/scripts/firestore/db-delete";
import { dbWrite } from "@/scripts/firestore/db-write";
import { Button, View } from "react-native";

export default function Test() {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Button
        title="dbWrite"
        onPress={() => {
          dbWrite({
            collection: {
              document: {
                field1: "asdaf",
                field2: [1, 2, 3, 4],
                subcollection: {
                  subdocument: {
                    subfield1: "qwert",
                    subfield2: "12345",
                    subsubcollection: {
                      subsubdocument: {
                        subsubfield1: "qwert",
                        subsubfield2: "12345",
                      },
                    },
                  },
                },
              },
            },
          });
        }}
      />
      <Button
        title="Delete Field"
        onPress={() => {
          dbDeleteField(
            "collection/document/subcollection/subdocument/subsubcollection/subsubdocument/subsubfield1"
          );
        }}
      />
      <Button
        title="Delete Doc"
        onPress={() => {
          dbDeleteDoc(
            "collection/document/subcollection/subdocument/subsubcollection/subsubdocument"
          );
        }}
      />
      <Button
        title="Delete Subollection"
        onPress={() => {
          dbDeleteCollection("subcollection", ["subsubcollection"]);
        }}
      />
      <Button
        title="Delete Generic SubSub Field1"
        onPress={() => {
          dbDelete(
            "collection/document/subcollection/subdocument/subsubcollection/subsubdocument/subsubfield1"
          );
        }}
      />
      <Button
        title="Delete Generic Sub Collection"
        onPress={() => {
          dbDelete("collection/document/subcollection", ["subsubcollection"]);
        }}
      />
      <Button
        title="Delete Generic SubSub Document"
        onPress={() => {
          dbDelete("collection/document/subcollection/subdocument", [
            "subsubcollection",
          ]);
        }}
      />
      <Button
        title="Delete Generic Root Collection"
        onPress={() => {
          dbDelete("collection", ["subcollection", "subsubcollection"]);
        }}
      />
    </View>
  );
}
