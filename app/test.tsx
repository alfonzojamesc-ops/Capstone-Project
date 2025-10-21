import { dbDelete, dbRead, dbWrite } from "@/scripts/firestore";
import React from "react";
import { Button, View, ViewStyle } from "react-native";

export default function Test() {
  return (
    <View style={containerStyle}>
      {/* WRITE */}
      <View style={sectionStyle}>
        <Button
          title="Write User1"
          onPress={() =>
            dbWrite("users/user1", {
              name: "Alice",
              age: 25,
              profile: { city: "NY", country: "USA" },
            })
          }
        />
        <Button
          title="Write User1 Post"
          onPress={() =>
            dbWrite("users/user1/posts/post1", {
              title: "Hello World",
              content: "This is my first post",
            })
          }
        />
      </View>

      {/* READ DOCUMENT */}
      <View style={sectionStyle}>
        <Button
          title="Read User1"
          onPress={async () => {
            const data = await dbRead("users/user1");
            console.log("User1 document:", data);
            console.log("Test document read:", data?.name);
            console.log("Test document read:", data?.profile.city);
          }}
        />
        <Button
          title="Read User1 Post1"
          onPress={async () => {
            const data = await dbRead("users/user1/posts/post1");
            console.log("Post1 document:", data);
          }}
        />
      </View>

      {/* READ COLLECTION */}
      <View style={sectionStyle}>
        <Button
          title="Read Users Collection"
          onPress={async () => {
            const docs = await dbRead("users");
            console.log("Users collection:", docs);
            console.log("Test Collection Read:", docs?.user1.age);
            console.log("Test Collection Read:", docs?.user1.profile);
          }}
        />
        <Button
          title="Read User1 Posts Collection"
          onPress={async () => {
            const docs = await dbRead("users/user1/posts");
            console.log("User1 posts collection:", docs);
          }}
        />
      </View>

      {/* DELETE */}
      <View style={sectionStyle}>
        <Button
          title="Delete Post1"
          onPress={() => dbDelete("users/user1/posts/post1")}
        />
        <Button
          title="Delete User1"
          onPress={() => dbDelete("users/user1", ["posts"])}
        />
        <Button
          title="Delete Users Collection"
          onPress={() => dbDelete("users")}
        />
      </View>
    </View>
  );
}

const containerStyle: ViewStyle = {
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "stretch",
  flexDirection: "row",
};

const sectionStyle: ViewStyle = {
  flex: 1,
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "90%",
};
