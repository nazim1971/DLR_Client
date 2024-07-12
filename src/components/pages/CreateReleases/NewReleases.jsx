import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const NewReleases = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic here
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
          <Tab>Title 4</Tab>
        </TabList>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TabPanel>
            <h2>Any content 1</h2>
            <label>
              Input 1:
              <Controller
                name="input1"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input1 && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Input 2:
              <Controller
                name="input2"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input2 && <span>This field is required</span>}
            </label>
          </TabPanel>

          <TabPanel>
            <h2>Any content 2</h2>
            <label>
              Input 3:
              <Controller
                name="input3"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input3 && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Input 4:
              <Controller
                name="input4"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input4 && <span>This field is required</span>}
            </label>
          </TabPanel>

          <TabPanel>
            <h2>Any content 3</h2>
            <label>
              Input 5:
              <Controller
                name="input5"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input5 && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Input 6:
              <Controller
                name="input6"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input6 && <span>This field is required</span>}
            </label>
          </TabPanel>

          <TabPanel>
            <h2>Any content 4</h2>
            <label>
              Input 7:
              <Controller
                name="input7"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input7 && <span>This field is required</span>}
            </label>
            <br />
            <label>
              Input 8:
              <Controller
                name="input8"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              {errors.input8 && <span>This field is required</span>}
            </label>
            <br />
            <input type="submit" value="Submit" />
          </TabPanel>
        </form>
      </Tabs>
    </div>
  );
};

export default NewReleases;
