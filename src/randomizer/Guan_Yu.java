package randomizer;

public class Guan_Yu extends godClass{ 
    public Guan_Yu() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Guan_Yu test = new Guan_Yu();
    System.out.println(test.getDamageType());
    }
}
